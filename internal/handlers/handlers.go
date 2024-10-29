package handlers

import (
	"encoding/json"
	"github.com/gofiber/fiber/v2"
	"jeffpalm.dev/portfolio/internal/smtp"
)

func ResumeRedirect(c *fiber.Ctx) error {
	return c.Redirect("https://docs.google.com/document/d/1sbfqaDbpB-eU6_msyee5EG3dvjhqumk0ahWBhAdxKmc/edit?usp=sharing")
}

func Contact(c *fiber.Ctx) error {
	var body smtp.MailDTO
	rawBody := c.Body()

	err := json.Unmarshal(rawBody, &body)

	if err != nil {
		_ = c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid JSON"})
		return err
	}

	err = smtp.SendMail(body)

	if err != nil {
		_ = c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Error sending email"})
		return err
	}

	return nil
}
