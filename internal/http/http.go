package http

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"time"
)

func GitHubRequest(method string, url string, body io.Reader) (*http.Response, error) {
	var res *http.Response

	req, err := http.NewRequest(method, url, body)
	if err != nil {
		log.Printf("Error creating request: %v", err)
		return res, err
	}

	authString := fmt.Sprintf("token %s", os.Getenv("GITHUB_AUTH_TOKEN"))
	req.Header.Set("Accept", "application/vnd.github.v3+json")
	req.Header.Set("Authorization", authString)
	client := http.Client{Timeout: 10 * time.Second}

	return client.Do(req)
}
