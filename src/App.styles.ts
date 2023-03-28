import styled from "styled-components";

export const AppContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6000ca11-0422-48c9-9254-65f6ba392a7c/db45zrx-82a76074-7256-4283-8803-f799a4e5fc86.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYwMDBjYTExLTA0MjItNDhjOS05MjU0LTY1ZjZiYTM5MmE3Y1wvZGI0NXpyeC04MmE3NjA3NC03MjU2LTQyODMtODgwMy1mNzk5YTRlNWZjODYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PGDS8tDXAcN_vIXPcdzl1mLBnfZuioAxlywgvbYL9ss");
  background-size: contain;

  .card-container {
    background-color: yellow;
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
`;
