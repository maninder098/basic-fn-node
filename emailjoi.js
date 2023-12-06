const Joi = require('joi');

// Define a Joi schema for email validation
const emailSchema = Joi.string().email().required();

// Example email to validate
const userEmail = 'tesexampl@e.com';

// Validate the email against the Joi schema
const { error, value } = emailSchema.validate(userEmail);

if (error) {
  console.error('Validation Error:', error.details[0].message);
} else {
  console.log('Email is valid:', value);
}
