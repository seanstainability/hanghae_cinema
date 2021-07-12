import React from "react";
import { Input, Button} from "../elements";

const CommentWrite = () => {
    return (
      <React.Fragment>
        <div padding="16px" is_flex>
          <Input placeholder="댓글을 입력하세요 :)" />
          <Button width="50px" margin="0px 2px 0px 2px">작성</Button>
        </div>
      </React.Fragment>
    );
}

export default CommentWrite;
