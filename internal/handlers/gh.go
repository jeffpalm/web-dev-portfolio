package handlers

import (
	"encoding/json"
	"io"
	"jeffpalm.dev/portfolio/internal/http"
	"log"
)

type gitHubRepo struct {
	ID          int    `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	HtmlURL     string `json:"html_url"`
	URL         string `json:"url"`
	Private     bool   `json:"private"`
}

func GetGitHubRepos() ([]gitHubRepo, error) {
	var repos []gitHubRepo

	res, err := http.GitHubRequest("GET", "https://api.github.com/users/jeffpalm/repos?type=owner&per_page=100&sort=updated&direction=desc", nil)
	if err != nil {
		log.Printf("Error sending request: %v", err)
		return repos, err
	}

	defer func(Body io.ReadCloser) {
		err2 := Body.Close()
		if err2 != nil {
			log.Printf("Error closing response body: %v", err2)
		}
	}(res.Body)

	resBody, err := io.ReadAll(res.Body)
	if err != nil {
		log.Printf("Error reading response body: %v", err)
		return repos, err
	}

	err = json.Unmarshal(resBody, &repos)
	if err != nil {
		log.Printf("Error reading response body: %v", err)
		return repos, err
	}

	return repos, nil
}
