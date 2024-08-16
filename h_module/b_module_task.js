// 서버와 통신하는 함수(CRUD)
const postService = (() => {
    // 게시글 작성(title, content)
    const write = ({ title, content, id }) => {
        // INSERT(Create)
        // 화면에서 사용자가 입력한 정보를 JAVA 서버로 보내기
    };

    // 게시글 목록
    const getList = (page = 1, callback) => {
        // 사용자가 요청한 페이지를 JAVA 서버로 보내기
        // 해당 페이지의 게시글 목록을 JSON으로 받아옴.
        // JSON.parse()
        const posts = JSON.parse("");
        if (callback) {
            callback(posts);
        }
    };

    // 게시글 조회
    const getPost = (id, callback) => {
        // JAVA 서버에 조회할 게시글의 번호를 전달함.
        // 해당 게시글 정보 돌려줌.
        const post = JSON.parse("");
        if (callback) {
            callback(post);
        }
    };

    const update = ({ id, title, content, userId }) => {
        // JAVA 서버에 수정된 정보 전달.
        // JAVA 서버에서 UPDATE 쿼리 발생
        // ORACLE DBMS에서 해당 테이블의 정보 수정됨.
        // JAVA에서 돌려줄 것 없음.
    };

    return { write: write, getList: getList, getPost: getPost, update: update };
})();

// 실습
// 댓글 모듈 만들기(replyService)
// 댓글 작성(write), 댓글 목록(getReplies), 댓글 수정(modify), 댓글 삭제(remove)
const replyService = (() => {
    const write = ({ postId, userId, content }, callback) => {
        // JAVA서버에 댓글 작성자 ID와 댓글 내용 전달
        if (callback) {
            callback(post);
        }
    };

    const getReplies = (postId, callback) => {
        // 작성자가 요청한 게시글을 JAVA서버로 보내기
        // 해당 게시글의 댓글목록을 JSON파일로 받아옴
        const replies = JSON.parse("");
        if (callback) {
            callback(replies);
        }
    };

    const modify = (reply) => {
        // JAVA 서버에 수정된 정보 전달
        // JAVA 서버에서 UPDATE 쿼리 발생
        // ORACLE DBMS에서 해당 테이블의 정보 수정됨.
        // 리턴이 없으므로 callback사용안함
    };

    const remove = (id) => {
        // JAVA 서버에 삭제할 정보 전달
        // 댓글id와 작성자id가 일치하면 JAVA서버에서 DELETE쿼리 발생
    };
    return {
        write: write,
        getReplies: getReplies,
        modify: modify,
        remove: remove,
    };
})();
