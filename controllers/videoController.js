import { videos } from "../db";
import routes from "../routes";

export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos });
};
    

export const search = (req, res) => {
    //const searchingBy = req.query.params와 같다
    const {
        query: { term: searchingBy }
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) => 
    res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
    const {
        body : { file, title, description } 
    } = req;
    //TO Do : Upload and Save video
    res.redirect(routes.videoDetail(312333));
};
    

export const videoDetail = (req, res) => 
    res.render("videoDetail", {pageTitle: "Video Detail"});

export const edtiVideo = (req, res) => 
    res.render("editVideo", {pageTitle: "Edit Video"});
    
export const deleteVideo = (req, res) => 
    res.render("deleteVideo", {pageTitle: "Delete Video"});