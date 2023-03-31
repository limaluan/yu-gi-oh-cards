import styled from "styled-components";

export const AppContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6000ca11-0422-48c9-9254-65f6ba392a7c/db45zrx-82a76074-7256-4283-8803-f799a4e5fc86.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYwMDBjYTExLTA0MjItNDhjOS05MjU0LTY1ZjZiYTM5MmE3Y1wvZGI0NXpyeC04MmE3NjA3NC03MjU2LTQyODMtODgwMy1mNzk5YTRlNWZjODYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PGDS8tDXAcN_vIXPcdzl1mLBnfZuioAxlywgvbYL9ss");
  background-size: cover;

  .card-container {
    background-image: url("https://upload.wikimedia.org/wikipedia/en/2/2b/Yugioh_Card_Back.jpg");
    background-size: cover;
    width: 40rem;
    height: 60rem;

    position: absolute;
    left: 10vw;
    top: 50%;
    transform: translateY(-50%);
  }

  .buttons-container {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 2rem;

    button {
      padding: 1rem;
      cursor: pointer;
    }
  }

  .my-deck {
    padding: 1rem;
    margin-top: 2rem;
    margin-left: 10vw;
    cursor: pointer;
  }

  .sidenav {
    background: #efefef;
    width: 35vw;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: 1000;
    transform: translateX(-100%);
    transition: transform 200ms;
    overflow-y: scroll;

    &.expanded {
      transform: translateX(0%);
    }

    h1 {
      font-size: 2.5rem;
      margin: 1rem auto;
      width: fit-content;
    }

    .close-icon {
      position: fixed;
      width: 3rem;
      right: 1rem;
      top: 1rem;
      cursor: pointer;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    li {
      display: grid;
      grid-template-columns: 1fr 1.5fr;

      .card {
        width: 80%;
        margin: auto;

        &:hover {
          transform: scale(1.3) translateX(10%);
          transition: transform 200ms;
        }
      }

      .delete-icon {
        width: 2rem;
        cursor: pointer;
      }

      div {
        display: flex;
        /* flex-direction: column; */
        justify-content: center;
        align-items: center;
        gap: 1rem;

        h2 {
          font-size: 2rem;
        }
      }
    }
  }

  /* .sidenav:before {
    content: "";
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.2);
    z-index: 1;
  } */
`;
