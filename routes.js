//하나의 진실의 source를 쓰기 위해...

// Global
const HOME = "/";
const SEARCH = "/search";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id"; // ex. /users/1 , /users/2 이런식으로
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit"; //ex. videos/1/edit , video/2/edit ...
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: VIDEO_DETAIL,
    edtiVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO
};

export default routes;