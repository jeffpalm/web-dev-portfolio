package handlers

import "github.com/gofiber/fiber/v2"

func ResumeRedirect(c *fiber.Ctx) error {
	return c.Redirect("https://docs.google.com/document/d/1sbfqaDbpB-eU6_msyee5EG3dvjhqumk0ahWBhAdxKmc/edit?usp=sharing")
}
