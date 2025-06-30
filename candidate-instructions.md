# AI-Driven Development Test: OpenID Connect Service

## Overview
You are tasked with developing a complete OpenID Connect service using AI-driven development practices. This assessment evaluates your ability to leverage AI tools effectively to design, implement, and deploy a production-ready authentication service.

## Project Requirements

### Core Components
You must develop the following three components:

1. **User Interface (Frontend)**
   - Login/logout functionality
   - User registration
   - Profile management
   - OAuth consent screen
   - Support for authorization code flow
   - Responsive design

2. **Service Backend (API)**
   - Full OpenID Connect protocol implementation
   - User management endpoints
   - Token issuance and validation
   - Client application management
   - Session management
   - Security best practices (PKCE, state parameter, nonce)

3. **Infrastructure Definitions**
   - Infrastructure as Code using Terraform
   - LocalStack-compatible resources
   - Database setup (user store)
   - Secrets management
   - Monitoring and logging configuration

### Technical Requirements

#### OpenID Connect Features
- Authorization endpoint
- Token endpoint
- UserInfo endpoint
- Discovery endpoint (/.well-known/openid-configuration)
- JWKS endpoint
- Support for authorization code flow
- ID token generation with proper claims
- Access token management
- Refresh token support (optional)

#### Security Requirements
- Secure password storage (bcrypt/scrypt/argon2)
- HTTPS enforcement
- CSRF protection
- Rate limiting
- Input validation
- SQL injection prevention
- XSS protection

### Technology Stack
You may choose your preferred technologies, but must justify your choices:
- React, Node.js, Typescript, DynamoDB, Terraform, Tailwind, ShadCN, Lambda, S3, Github Actions (Act), Secrets Manager, Webauthn, ESLint, Jest

## Development Environment

### LocalStack Setup
A docker-compose.yml file is provided for running LocalStack. Use this to simulate AWS services locally. You will be provided a license key for localstack

### Getting Started
1. Run `docker-compose up` to start LocalStack
2. Review the sample Terraform configuration
3. Begin development using your AI tools of choice

## Evaluation Criteria

### 1. AI Tool Utilization (40%)
- Effective prompting strategies
- Iterative refinement of AI-generated code
- Understanding AI limitations and compensating appropriately
- Documentation of AI usage and decision-making process

### 2. Code Quality (30%)
- Clean, maintainable code structure
- Proper error handling
- Comprehensive testing
- Security best practices
- Performance considerations

### 3. Feature Completeness (10%)
- All required OpenID Connect endpoints functional
- User interface meets all requirements
- Infrastructure properly defined and deployable
- Integration between all components

### 4. Documentation (20%)
- Clear setup instructions
- API documentation
- Architecture decisions
- AI tool usage log

## Deliverables

1. **Source Code**
   - All three components in separate directories
   - Tests for critical functionality
   - Configuration files

2. **Documentation**
   - README.md with setup instructions
   - API documentation
   - Architecture diagram
   - Security considerations document

3. **AI Usage Report**
   - Tools used (ChatGPT, Claude, Copilot, etc.)
   - Example prompts and iterations
   - Challenges faced and how AI helped solve them
   - Areas where manual intervention was necessary

4. **Demo**
   - Deployment on LocalStack
   - Video walkthrough
   - Test client application demonstrating the flow

## Time Allocation
- 4 hours
- Suggested breakdown:
  - Planning and research: 15 minutes
  - Environment and tool setup: 45 minutes
  - Infrastructure setup: 30 minutes
  - Backend development: 1 hours
  - Frontend development: 30 minutes
  - Testing and documentation: 1 hour

## Submission Instructions
1. Commit regularly with meaningful messages
2. Include your AI usage log as a Markdown file
3. Zip the contents if your development directory including the .git directory and email to aaron.bawcom@invisible.email

## Additional Notes
- You may use any AI tools available to you
- External libraries and frameworks are allowed
- Focus on demonstrating effective AI-driven development
- Partial implementations are acceptable if well-documented
- Security is paramount - ensure no secrets are committed

## Questions?
If you have questions about the requirements, document your assumptions and proceed. Part of the evaluation is your ability to work with incomplete requirements using AI assistance

Good luck!