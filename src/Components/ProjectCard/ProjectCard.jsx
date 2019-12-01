import React, { Component } from "react";
import styles from "./ProjectCard.module.scss";

class ProjectCard extends Component {
  state = {};
  render() {
    return (
      <section className={styles.card}>
        <h2>this.props.title</h2>
        <a href="https://google.com" target="_blank" rel="noopener no referrer">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAY1BMVEXDw8MAAADIyMhwcHCKioqkpKS8vLyurq7JycmAgICQkJCfn594eHhra2uqqqp7e3tZWVlUVFRCQkK2trZISEi+vr4XFxdNTU0oKCghISEzMzNlZWWYmJgLCws9PT3Pz88eHh57cn8hAAACOUlEQVR4nO3b6W6CQBhGYWa0Oopr0Wpdau//KlsUWXTGBmhifDnP3xqSOYAfII0iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAjrHtPXsJrY16bY2evYSW7Ni0N37tI8H2/6FB//UbxIM2YokGb22WYN80GrTagFQD65pMOaUGbjhZTGNXfwM6Ddz8/A2/qb8BmQb5ZcKy7pEg1CCf9bO6G5BpMMsbTGquR6aBjfMG0642iJI/r3tDc1OngXu/Nlj7P+fieeJdqU6D/EAI3AK6afo338wQamCT1e8qt4GLpGx0zjxrFWrwu6uTWRI66bOj5NO3AaUGjz60y86Uxf1h0pEG5y+DbGrcRehGA3soPTIa3i63Gw0G5cdm2042KC4dzvY3Z0MXGrjJzQPUQ3XBmg2sLe3qdIk3BtVPKzZw8+2yuCxeH+8a7Cpng2ID1yvva7e5S2BMrxxBsEF2F/11WZUbeRIYE5fWLNjgOggn6b62Q2+Cys2lXoNiEKb72n4EGqyKs0GuQWkQHtfRaRlIYMw8j6DWoDIIV6dHP8fmv8+pNVhXjv3egwTmI9+AVgPvIAy5/hCh1SAwCEOy22ipBsFBGHK5jZZqEH3XbHB5sqbUwC1qJsierAk1aPRuVvogXqhB8veKPRKlBnbbqMHO6jQ47RslMGbqVBq45i9qjp1IAztsTqQB72g2Pg0Kr96Ad7Yj3t1P8T8cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtf0A7N8ZC2Gr650AAAAASUVORK5CYII="
            alt={this.props.title}
          />
        </a>
        <p>this.props.description</p>
      </section>
    );
  }
}

export default ProjectCard;
