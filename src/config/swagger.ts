// src/config/swagger.ts
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import type { Express } from "express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Todo API with Auth",
            version: "1.0.0",
            description: "API documentation for our backend project",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./src/routes/*.ts"],   //points to route files
};

const swaggerSpec = swaggerJsdoc(options);

export function swaggerDocs(app: Express) {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log("Swagger docs available at http://localhost:3000/api-docs");
}
