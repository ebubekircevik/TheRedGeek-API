import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TheRedGeek API",
      version: "1.0.0",
      description: "Blog and User API documentation"
    },
    servers: [
      { url: "http://localhost:5000" }
    ]
  },
  apis: ["./src/routes/*.ts"], // Route dosyalarında açıklama için
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;