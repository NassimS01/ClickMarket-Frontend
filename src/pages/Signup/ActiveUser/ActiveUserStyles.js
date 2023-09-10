import styled from "styled-components";

export const VerifyUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 99vh;

  .card-verify {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #f2f2f2;
    gap: 20px;
    width: 300px;
    height: 300px;
    padding: 15px;
    box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.14);
    border: 1px solid #efefef;
    border-radius: 20px;
  }

  p {
    text-align: center;
  }

  span {
    font-weight: 600;
  }

  .background-verify {
    position: relative;
    width: 100%;
    height: 99vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .background-verify::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("https://assets.aboutamazon.com/dims4/default/fa6fc41/2147483647/strip/false/crop/2000x1333+0+0/resize/1486x990!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F4b%2F89%2F9371cec440f79aa6e2d438f6a9f8%2Fwelcome-sign-0901-blog-size.jpg");
    background-size: cover;
    /* background-attachment: fixed; */
    background-position: -50%;
    filter: blur(10px);
    z-index: -1;
  }
`;
