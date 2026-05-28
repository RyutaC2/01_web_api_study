package main

import (
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	r := chi.NewRouter()

	r.Use(middleware.Logger)

	r.Post("/api/users/register", registerHandler)
	r.Post("/api/users/login", loginHandler)

	log.Println("サーバー起動: ポート8080")
	err := http.ListenAndServe(":8080", r)
	if err != nil {
		log.Fatal(err)
	}
}

func registerHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("register:未実装"))
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("login:未実装"))
}
