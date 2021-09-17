require('dotenv').config()
const s3 = require('aws-sdk/clients/s3')
const  fs = require('fs')
const {bucketName,region,accessKeyId,secretAccessKey} = process.env


const S3 = new s3 ({
    region,
    accessKeyId,
    secretAccessKey
})

 
  // uploads a file to s3
  function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path)
  
    const uploadParams = {
      Bucket: bucketName,
      Body: fileStream,
      Key: file.filename
    }
  
    return S3.upload(uploadParams).promise()
  }
  exports.uploadFile = uploadFile
  
  
  // downloads a file from s3
  function getFileStream(fileKey) {
    const downloadParams = {
      Key: fileKey,
      Bucket: bucketName
    }
  
    return s3.getObject(downloadParams).createReadStream()
  }
  exports.getFileStream = getFileStream