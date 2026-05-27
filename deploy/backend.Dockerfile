FROM golang:1.23-alpine AS builder

WORKDIR /build
COPY back_end/go.mod back_end/go.sum ./
RUN go mod download

COPY back_end/. .
RUN go build -o /app/server ./...


FROM alpine:latest

RUN adduser -D appuser
USER appuser

COPY --from=builder /app/server /app/server

EXPOSE 8080
CMD ["/app/server"]