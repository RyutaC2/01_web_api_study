FROM golang:1.26.3-alpine AS builder

WORKDIR /build
COPY back_end/go.mod back_end/go.sum ./
RUN go mod download

COPY back_end/. .
RUN go build -o /app/server .


FROM alpine:3.22

RUN adduser -D appuser
USER appuser

COPY --from=builder /app/server /app/server

EXPOSE 8080
CMD ["/app/server"]