import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../../actions/postAction";
// import { EditorState, convertToRaw, ContentState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class CommentForm extends Component {
  state = {
    text: "",
    errors: {}
  };

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({
        errors: newProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const { user } = this.props.auth;
    const { postId } = this.props;
    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addComment(postId, newComment);
    this.setState({
      text: ""
    });
  };

  render() {
    const { text, errors } = this.state;
    return (
      <div className="row">
        <div className="col s12">
          <div className="card left-align">
            <div className="card-content">
              <span className="flow-text">Make a comment...</span>
            </div>
            <div className="divider" />
            <div className="card-content black-text">
              <div className="row">
                <form className="col s12" onSubmit={this.onSubmit}>
                  <div className="row">
                    {/*<Editor
                      editorState={this.state.text}
                      wrapperClassName="wrapper-class"
                      editorClassName="editor-class"
                      toolbarClassName="toolbar-class"
                      onEditorStateChange={this.onChange}
                    />*/}
                    <div className="input-field col s12">
                      <textarea
                        id="textarea2"
                        className={
                          errors.text
                            ? "materialize-textarea invalid"
                            : "materialize-textarea validate"
                        }
                        value={text}
                        name="text"
                        onChange={this.onChange}
                      />
                      <label htmlFor="textarea2">Reply to Post</label>
                      <span className="helper-text" data-error={errors.text}>
                        Comment to the post
                      </span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn waves-effect waves-light blue"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CommentForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addComment }
)(CommentForm);
