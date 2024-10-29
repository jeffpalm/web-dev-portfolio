package smtp

import (
	"log"
	"net/smtp"
	"os"
)

type smtpVars struct {
	Host string
	Port string
	User string
	Pass string
	To   string
	From string
}

type MailDTO struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Subject string `json:"subject"`
	Message string `json:"message"`
}

func getVars() (smtpVars, error) {
	host := os.Getenv("SMTP_HOST")
	port := os.Getenv("SMTP_PORT")
	user := os.Getenv("SMTP_USER")
	pass := os.Getenv("SMTP_PASS")
	to := os.Getenv("SMTP_TO")
	from := os.Getenv("SMTP_FROM")

	if host == "" || user == "" || pass == "" || port == "" || to == "" || from == "" {
		return smtpVars{}, os.ErrNotExist
	}

	return smtpVars{host, port, user, pass, to, from}, nil
}

func SendMail(dto MailDTO) error {
	vars, err := getVars()
	if err != nil {
		log.Println("Error getting SMTP env variables")
		return err
	}

	auth := smtp.PlainAuth("", vars.User, vars.Pass, vars.Host)
	to := []string{vars.To}
	msg := []byte("To: " + vars.User + "\r\n" +
		"Subject: [Contact Form] - " + dto.Subject + "\r\n" +
		"\r\n" + "Name: " + dto.Name + "\r\n" + "Email: " + dto.Email + "\r\n" + "Message: " + dto.Message + "\r\n")

	err = smtp.SendMail(vars.Host+":"+vars.Port, auth, vars.From, to, msg)

	if err != nil {
		return err
	}

	return nil
}
