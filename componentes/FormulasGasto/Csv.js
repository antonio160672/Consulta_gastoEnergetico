import { View, Text, NativeModules } from 'react-native'
import React from 'react'
import RNFetchBlob from 'react-native-fetch-blob'


const Csv = (vectorMagnitud, Experimento) => {
    const matrizTrans = (vectorMagnitud) => {
        var copy = [];
        for (var i = 0; i < vectorMagnitud.length; ++i) {
            for (var j = 0; j < vectorMagnitud[i].length; ++j) {
                // skip undefined values to preserve sparse array
                if (vectorMagnitud[i][j] === undefined) continue;
                // create row if it doesn't exist yet
                if (copy[j] === undefined) copy[j] = [];
                // swap the x and y coords for the copy
                copy[j][i] = vectorMagnitud[i][j];
            }
        }
        return copy;
    }
    const matriznueva =matrizTrans(vectorMagnitud)
    //construct csvString
    const headerString = 'cinturaFvm,cinturaejesx_counts,cinturaejesx_f_counts,cinturaejesy_counts,cinturaejesy_f_counts,cinturaejesz_counts,cinturaejesz_f_counts,cinturavm,manoFvm,manoejesx_counts,manoejesx_f_counts,manoejesy_counts,manoejesy_f_counts,manoejesz_counts,manoejesz_f_counts,manovm,piernaFvm,piernaejesx_counts,piernaejesx_f_counts,piernaejesy_counts,piernaejesy_f_counts,piernaejesz_counts,piernaejesz_f_counts,piernavm\n';
    const rowString = matriznueva.map(d => `${d[0]},${d[1]},${d[2]},${d[3]},${d[4]},${d[5]},${d[6]},${d[7]}, ${d[8]},${d[9]},${d[10]},${d[11]},${d[12]},${d[13]},${d[14]},${d[15]},${d[16]},${d[17]},${d[18]},${d[19]},${d[20]},${d[21]},${d[22]},${d[23]},\n`).join('');
    const csvString = `${headerString}${rowString}`;

    // write the current list of answers to a local csv file
    const pathToWrite = "/storage/emulated/0/Documents/"+Experimento+ "VM.csv";
    // pathToWrite /storage/emulated/0/Download/data.csv
    RNFetchBlob.fs
        .writeFile(pathToWrite, csvString, 'utf8')
        .then(() => {
            console.log(`wrote file ${pathToWrite}`);
            // wrote file /storage/emulated/0/Download/data.csv
        })
        .catch(error => console.error(error));
}

export default Csv