import imaplib, email
mail = imaplib.IMAP4_SSL('imap.gmail.com')
mail.login('yourmail@gmail.com', 'yourpassword')
mail.list()
mail.select("inbox") # connect to inbox.
#you have to choose a subject (replace "subject_here" by a subject from your choice")
result, data = mail.uid('search', None, '(HEADER Subject "your_subject")') # search and return uids instead
latest_email_uid = data[0].split()[-1]
result, data = mail.uid('fetch', latest_email_uid, '(RFC822)')
raw_email = data[0][1]
email_message = email.message_from_string(raw_email)
def get_first_text_block(email_message_instance):
    maintype = email_message_instance.get_content_maintype()
    if maintype == 'multipart':
        for part in email_message_instance.get_payload():
            if part.get_content_maintype() == 'text':
                print part.get_payload()
    elif maintype == 'text':
        print email_message_instance.get_payload()
get_first_text_block(email_message)
