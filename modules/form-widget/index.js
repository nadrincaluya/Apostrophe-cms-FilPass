// modules/contact-form-widget/index.js
const cors = require('cors');
const nodemailer = require('nodemailer');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Contact Form'
  },
  fields: {
    add: {
      title: {
        type: 'string',
        label: 'Form Title',
        default: 'Send us a message'
      },
      fields: {
        type: 'array',
        label: 'Form Fields',
        titleField: 'label',
        fields: {
          add: {
            label: {
              type: 'string',
              label: 'Field Label'
            },
            name: {
              type: 'string',
              label: 'Field Name'
            },
            type: {
              type: 'select',
              label: 'Field Type',
              choices: [
                { label: 'Text', value: 'text' },
                { label: 'Email', value: 'email' },
                { label: 'Phone', value: 'tel' },
                { label: 'Dropdown', value: 'select' },
                { label: 'Textarea', value: 'textarea' }
              ]
            },
            required: {
              type: 'boolean',
              label: 'Required'
            },
            choices: {
              type: 'array',
              titleField: 'label',
              label: 'Choices (for Dropdown)',
              if: { type: 'select' },
              fields: {
                add: {
                  label: {
                    type: 'string',
                    label: 'Choice Label'
                  },
                  value: {
                    type: 'string',
                    label: 'Choice Value'
                  }
                }
              }
            }
          }
        }
      },
      formSpacingTop: {
        type: 'integer',
        label: 'Vertical Spacing Top (px)'
      },
      formSpacingBottom: {
        type: 'integer',
        label: 'Vertical Spacing Bottom (px)'
      }

    },
    group: {
      content: {
        label: 'Content',
        fields: [ 'title', 'fields', ]
      },
     

      spacing: {
        label: 'Vertical Spacing',
        fields: ['formSpacingTop', 'formSpacingBottom']
      }
    }
  },

  init(self) {
    // Enable CORS for the widget's API routes
    self.apos.app.use(cors());
  },

  apiRoutes(self) {
    return {
      post: {
        '/submit': async function(req, res) {
          try {
            // Ensure CORS headers are set (in case CORS middleware is not globally applied)
            res.setHeader('Access-Control-Allow-Origin', '*');  // Or specify a specific domain if needed

            const { name, email, message } = req.body;

            // Set up Nodemailer transport
            const transporter = nodemailer.createTransport({
              service: 'gmail',  // Or use any SMTP provider you prefer
              auth: {
                user: process.env.EMAIL,  // Sender email
                pass: process.env.EMAIL_PASSWORD  // Sender email password
              }
            });

            // Define email content
            const mailOptions = {
              from: email,  // Sender's email (user's email from the form)
              to: ['nadrincaluya@example.com', 'reymanik23@example.com'],  // Recipients' emails (you can add more recipients here)
              subject: 'New Contact Form Submission',
              text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
            };

            // Send the email
            await transporter.sendMail(mailOptions);

            // Respond to frontend with success message
            return res.json({
              success: true,
              message: 'Your message has been sent!'
            });
          } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({
              success: false,
              message: 'An error occurred. Please try again later.'
            });
          }
        }
      }
    };
  }
};
