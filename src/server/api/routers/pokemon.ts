import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const pokemonRouter = createTRPCRouter({
  getPokemon: publicProcedure
    .input(z.union([z.string(), z.array(z.string())]))
    .query(async ({ ctx, input }) => {
      if (typeof input === "string") {
        const pokemon = await ctx.db.pokemon.findFirst({
          where: {
            name: {
              equals: input.toLowerCase(),
              mode: "insensitive",
            },
          },
          include: { types: true },
        });

        if (!pokemon) {
          throw new Error(`Pokemon with name ${input} not found`);
        }

        return {
          id: pokemon.id,
          name: pokemon.name,
          types: pokemon.types.map((t) => t.type),
          sprite: pokemon.sprite,
        };
      } else {
        const pokemons = await ctx.db.pokemon.findMany({
          where: {
            name: {
              in: input.map((name) => name.toLowerCase()),
              mode: "insensitive",
            },
          },
          include: { types: true },
        });

        return pokemons.map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          types: pokemon.types.map((t) => t.type),
          sprite: pokemon.sprite,
        }));
      }
    }),
  getPokemonByType: publicProcedure
    .input(
      z.object({
        types: z.array(z.string()),
      }),
    )
    .query(async ({ ctx, input }) => {
      const pokemons = await ctx.db.pokemon.findMany({
        where: {
          types: {
            some: {
              type: { in: input.types },
            },
          },
        },
        include: { types: true },
      });

      return pokemons.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.map((t) => t.type),
        sprite: pokemon.sprite,
      }));
    }),
  getAllTypes: publicProcedure.query(async ({ ctx }) => {
    const types = await ctx.db.pokemonType.findMany({
      distinct: ["type"],
      select: {
        type: true,
      },
    });

    return types.map((t) => t.type);
  }),
});
