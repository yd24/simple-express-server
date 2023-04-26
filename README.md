# simple-express-server

## Description

A simple express server that sends a 200 status response.

## AWS deployment links

* https://simpleexpressserver-env.eba-y8cjnuii.us-west-2.elasticbeanstalk.com/ (GUI)
* http://simple-express-server-2.eba-ugy3h2gd.us-west-2.elasticbeanstalk.com/ (CLI)

## AWS Control Panel deployment
* Go to Elastic Beanstalk homepage on Amazon Control Panel.
* Click create application.
* Select "Web server environment" for this server application.
* Fill out the application name.
* Pick "Node" as the managed platform.
* Select "Upload your code" and pick a local zip file containing your server.
* Use single instance (free-tier) for now.
* Keep everything else at default for now.

## AWS CLI deployment
* Make sure that your machine is configured with your AWS credentials.
* Use "aws configure" in your terminal and input your access and security access keys and set your region.
* Go to your server directory and use the command "eb init" to start an Elastic Beanstalk application.
* Use "eb create" to start an environment through Elastic Beanstalk.