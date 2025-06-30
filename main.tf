provider "aws" {
  region                      = "us-east-2"
  access_key                  = "test"
  secret_key                  = "test"
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true
  
  endpoints {
    s3       = "http://localhost:4566"
    sqs      = "http://localhost:4566"
    lambda   = "http://localhost:4566"
    dynamodb = "http://localhost:4566"
    secretsmanager = "http://localhost:4566"
    iam      = "http://localhost:4566"
    apigateway = "http://localhost:4566"
  }
  
  s3_use_path_style = true
}

resource "aws_s3_bucket" "test_bucket" {
  bucket = "my-local-bucket"
}

resource "aws_sqs_queue" "test_queue" {
  name = "my-local-queue"
}

resource "aws_dynamodb_table" "test_table" {
  name           = "my-local-table"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "id"
  attribute {
    name = "id"
    type = "S"
  }
}