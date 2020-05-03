import {Component, OnInit} from '@angular/core';
import QRCode from 'qrcode';
import {QrCodePageModule} from './qr-code.module';
import {Base64ToGallery} from '@ionic-native/base64-to-gallery/ngx';

declare let window: any; // <--- Declare it like this
import mergeImages from 'merge-images';

@Component({
    selector: 'app-qr-code',
    templateUrl: './qr-code.page.html',
    styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {

    constructor(
        private base64ToGallery: Base64ToGallery
    ) {
    }


    ngOnInit() {
    }

    mergeImage() {

        let image2 =
            '../../assets/wave/img1.jpeg';

        let image3 =
            '../../assets/wave/qrcode.png';
        console.log('icicic', image2);
        mergeImages([
            {src: image2, x: 0, y: 0},
            {src: image3, x: 0, y: 20},
        ], {
            width: window.screenX,
            height: window.screenY
        }).then((b64) => {
            //  document.querySelector('img').src = b64;
            // Split the base64 string in data and contentType
            let block = b64.split(';');
// Get the content type
            let dataType = block[0].split(':')[1];// In this case "image/png"
// get the real base64 content of the file
            let realData = block[1].split(',')[1];// In this case "iVBORw0KGg...."
            // The path where the file will be created
            var folderpath = 'file:///storage/emulated/0/';
            var filename = 'myimage.png';
            this.savebase64AsImageFile(folderpath, filename, realData, dataType);
        })
            .catch(err => {
                console.error(err);
            })
            .catch(e => console.log(e));
    }

    genQrcode() {
// With promises
        QRCode.toDataURL('I am a pony!')
            .then(url => {
                console.log(url);
// Split the base64 string in data and contentType
                let block = url.split(';');
// Get the content type
                let dataType = block[0].split(':')[1];// In this case "image/png"
// get the real base64 content of the file
                let realData = block[1].split(',')[1];// In this case "iVBORw0KGg...."
                // The path where the file will be created
                var folderpath = 'file:///storage/emulated/0/';
                var filename = 'myimage.png';
                this.savebase64AsImageFile(folderpath, filename, realData, dataType);

            })
            .catch(err => {
                console.error(err);
            });
    }


    b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        const byteCharacters = atob(b64Data);
        const byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        const blob = new Blob(byteArrays, {type: contentType});
        return blob;
    }


    savebase64AsImageFile(folderpath, filename, content, contentType) {
        // Convert the base64 string in a Blob
        const DataBlob = this.b64toBlob(content, contentType, 512);

        console.log('Starting to write the file :3');

        window.resolveLocalFileSystemURL(folderpath, function(dir) {
            console.log('Access to the directory granted succesfully');
            dir.getFile(filename, {create: true}, function(file) {
                console.log('File created succesfully.');
                file.createWriter(function(fileWriter) {
                    console.log('Writing content to file');
                    fileWriter.write(DataBlob);
                }, function() {
                    alert('Unable to save file in path ' + folderpath);
                });
            });
        });
    }

}
