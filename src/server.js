import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/index.js";
import path from "path";
import { fileURLToPath } from "url";

//---
/* temporal fix for path */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname( __filename );
// ---- relative url

//---- absolute url
const server = new GraphQLServer({
    typeDefs: path.join(__dirname, "graphql/schema.graphql"),
    resolvers: resolvers
})

export default server