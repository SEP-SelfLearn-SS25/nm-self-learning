import { appRouter, createTrpcContext } from "@self-learning/api";
import * as trpcNext from "@trpc/server/adapters/next";

export default trpcNext.createNextApiHandler({
	router: appRouter,
	createContext: createTrpcContext
});
