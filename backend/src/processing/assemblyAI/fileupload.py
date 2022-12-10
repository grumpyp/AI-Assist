import ftplib
from backend.src.processing.assemblyAI.config import FTP_HOST, FTP_USER, FTP_PASSWORD


def upload_file(filepath):
    """
    Uploads a file to the FTP server, use the absolute path to the file.
    :param filepath:
    :return:
    """
    import ftplib

    # FTP server details
    server = FTP_HOST
    username = FTP_USER
    password = FTP_PASSWORD

    # Open a connection to the FTP server
    ftp = ftplib.FTP(server)

    # Login to the FTP server
    ftp.login(username, password)

    # File to be uploaded, absolute path
    file_to_upload = filepath
    filename = file_to_upload.split("/")[-1]

    file_path = f"https://hackathon.content-baer.de/{filename}"

    # Open the file to be uploaded
    with open(file_to_upload, "rb") as f:
        # Upload the file to the FTP server
        ftp.storbinary(f"STOR {filename}", f)

    # Close the FTP connection
    ftp.quit()

    # Return the full path to the file on the FTP server
    print(file_path)
    return file_path

