# Raspberry Pi Web Security Program

This is an engineering project, which reduces the cost of home security.
Node.js renders the graphical user interface, Express provides the security
for the user to safely login, a flat file database stores the security
images locally on the Raspberry Pi, and ngrok provides an obscure web portal
for the user to access their device(s) information. Notice that physical control
over the Raspberry Pi comprimises this surveillance system and that digital
access to the ngrok address may compromise communication with the device
through the internet.

## Maintenance Note

Continuous operation of a Raspberry Pi is a bit more delicate than with 
other computational systems. There are three primary factors that make a 
Raspberry Pi vulnerable to failure.

1. The Raspberry Pi's electronic surface is normally exposed to the environment. This means there is a high risk of electrostatic discharge.
2. SD-Card based operating systems are always vulnerable to corruption. Corruption normally occurs during a read write operation. This device is designed to continuously write information. So, the probability of your SD-Card becoming corrupted is very high.
3. The Raspberry Pi like any computer needs a constant source of power.

## Cybersecurity Note

The software in this project is designed to operate within any software,
operating system, and hardware configuration. However, there is a security
risk that comes up with this cross compatibilty, which is that the device
is also vulnerable to attack from many different cyber attack vectors.

## Mathematics Note

For this project we have chosen to install Linux Ubuntu Mate.
There are a team of open-source developers that spend their time
improving this operating system and patching security issues as they arise.
However, due to a mathematical property known as the Pumping Lemma:

https://en.wikipedia.org/wiki/Pumping_lemma

There is no way to make a secure digital system. So, the trick to security
is making sure that it costs the malicious actor more time, energy, and
money to attack you than they would gain from the attack. Keep this in
mind and you may even become extremely successful in business and in life as well.

## Installing Linux Ubuntu Mate

The first step to starting this security system is installing an operating system.

1. Check if you have a Raspberry Pi 3 manufactured after 2016.

a. If you have a Raspberry Pi 3 made after 2016, then download the Linux Ubuntu Mate image from the following link: https://ubuntu-mate.org/download/arm64/focal/
b. If you have a Raspberry Pi 3 made before 2016, then download the Linux Ubuntu Mate image from the following link: https://ubuntu-mate.org/download/armhf/focal/

Note: Linux Ubuntu Mate will be delivered to you in a compressed format. You will need to download a software to decompress this image.

2. Extract the Linux Ubuntu Mate image.

### MacOS

Mac users can use The Unarchiver to extract the Linux Ubuntu Mate image, which is a free software provided by the mac developer community. Use the following link to download The Unarchiver: https://theunarchiver.com/

2.1. Click on Download.
2.2. When the dowload finishes, open the .zip file from the Downlads folder.
2.3. Move The Unarchiver from the Downloads folder to the Applications folder.
2.4. Open the Downloads folder.
2.5. Double click the Ubuntu Linxu Mate .xz file to extract it.

### Windows

Windows users can use 7-zip to extract the Linux Ubuntu Mate image, which is an open source, community maintained compression and extraction software. Use the following link to download 7-zip: https://www.7-zip.org/

Note: Make sure you download the software that matches your computer's processor.

2.1. Click on Download.
2.2. Choose Save.
2.3. Go to Downloads in File Explorer.
2.4. Double click on the 7-Zip file.
2.5. Choose Install.
2.6. After installation completes, go to downloads.
2.7. Right click the Ubuntu Linux Mate .xz file.
2.8. Hover over 7-Zip.
2.9. Click Extract Here

3. Format the SD card.

Now that the image has been extracted, we can move the image to the SD card.

### MacOS

### Windows