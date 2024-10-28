package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
	"jeffpalm.dev/portfolio/internal/handlers"
	"log"
)

func loadEnv() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Error loading .env file: %s", err)
	}
}

func main() {
	loadEnv()
	app := fiber.New()
	app.Get("/healthcheck", func(c *fiber.Ctx) error {
		return c.SendString("OK")
	})
	app.Get("/resume", handlers.ResumeRedirect)
	app.Static("/", "./build")
	log.Fatal(app.Listen(":3000"))
}
