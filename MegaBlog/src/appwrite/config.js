import conf from "../conf/conf";

import {Client, Account, ID, Databases, Query} from 'appwrite';

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Databases(this.client)
    }

    //Post related services 
    async createPost({title,slug,content,featuredImage,status,userId}){
            try{

                return await this.databases.createDocument(
                    conf.appWriteDatabseId,
                    conf.appWriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        status,
                        featuredImage,
                        userId
                    }
                )

            }catch(error){
                console.log("Appwrite Service :: createPost :: error" , error)
            }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        
        try{

            return await this.databases.updateDocument(
                conf.appWriteDatabseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        }catch(error){
            console.log("Appwrite error::" , error)
        }
    }

    async deletePost(slug){
        try{

            await this.databases.deleteDocument(
                conf.appWriteDatabseId,
                conf.appWriteCollectionId,
                slug
            )
            return true
        }catch(error){
            console.log("Appwrite Error:: deletePost ::",error )
            return false
        }
    }

    async getPost(slug){

        try{
            return await this.databases.getDocument(
                conf.appWriteDatabseId,
                conf.appWriteCollectionId,
                slug
            )

        }catch(error){
            throw error;
            return false
        }
    }

    async getQueriedPosts(queries = [Query.equal("status", "active")]){
        try{

            return await this.databases.listDocuments(
                conf.appWriteDatabseId,
                conf.appWriteCollectionId,
                queries,
            )

        }catch(error){
            console.log("Appwrite Error:: getQueriedPosts::" , error)
            return false;
        }
    }

    //File upload method
    async uploadFile(file){

        try{

            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
            return true;
        }catch(err){
            console.log("Appwrite error :: UploadFile:: ", err)
            return false
        }
    }

    //File delete method
    async deleteFile(fileId){
        try{

            return await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
            return true;
        }catch(error){
            console.log("Appwrite Service Error:: FileDelete::", error)
        }
    }

    //File preview method
    getFilePreview(){
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileIds
        )
    }
}

const service = new Service()
export default service