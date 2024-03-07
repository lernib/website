from zipfile import ZipFile
import os.path as path
import os

# Absolute path of Python file directory
# In this case, it's $REPOSITORY/aws/codedeploy
PYDIR = path.dirname(__file__)
EC2_DIR = path.join(PYDIR, '../ec2')

with ZipFile(path.join(PYDIR, 'archive_prod.zip'), 'w') as archive:
    # Write appspec.yml
    archive.write(path.join(PYDIR, '../../appspec.yml'), 'appspec.yml')
    # Write all of the contents of aws/ec2
    for root, dirs, files in os.walk(EC2_DIR):
        root_rel = path.relpath(root, EC2_DIR)

        for file in files:
            archive.write(path.join(root, file), path.join(root_rel, file))

    archive.close()
