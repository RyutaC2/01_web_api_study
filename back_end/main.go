package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/jackc/pgx/v5/pgxpool"
)

type Handler struct {
	db *pgxpool.Pool
}

func main() {
	// DB系処理
	dsn := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
	)

	pool, err := pgxpool.New(context.Background(), dsn)
	if err != nil {
		log.Fatal("DB接続プール作成失敗:", err)
	}
	defer pool.Close()

	if err := pool.Ping(context.Background()); err != nil {
		log.Fatal("DB接続失敗:", err)
	}
	log.Println("DB接続成功")

	// Handler構造体にDB接続を入れる
	h := &Handler{db: pool}

	// chiルーターのセットアップ
	r := chi.NewRouter()

	r.Use(middleware.Logger)

	r.Post("/api/users/register", h.registerHandler)
	r.Post("/api/users/login", h.loginHandler)

	log.Println("サーバー起動: ポート8080")
	err = http.ListenAndServe(":8080", r)
	if err != nil {
		log.Fatal(err)
	}
}

func (h *Handler) registerHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("register:未実装"))
}

func (h *Handler) loginHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("login:未実装"))
}
