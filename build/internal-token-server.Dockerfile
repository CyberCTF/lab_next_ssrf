FROM python:3.11-slim
WORKDIR /app
COPY internal-token-server.py .
RUN pip install flask
EXPOSE 8000
CMD ["python", "internal-token-server.py"] 