<template>
  <div class="login">
    <div class="container__login">
      <div class="image__login">
        <img src="../assets/images/login.svg" alt="workout image" />
      </div>
      <div class="content__login">
        <h3 class="tittle__login">Hello</h3>
        <div class="type__login">
          <span @click="this.login = true">
            Login
            <span v-if="this.login" class="bar"></span>
          </span>
          <span @click="this.login = false">
            Sign Up
            <span v-if="!this.login" class="bar"></span>
          </span>
        </div>
        <div class="signup__login">
          <form class="login__content" v-if="login">
            <fieldset class="input-box">
              <input id="email" type="email" required />
              <label for="email" placeholder="Email"></label>
            </fieldset>
            <fieldset class="input-box">
              <input
                id="password"
                type="password"
                autocomplete="off"
                required
              />
              <label for="password" placeholder="Password"></label>
            </fieldset>
            <button class="button">Login</button>
          </form>
          <form class="signup__content" v-if="!login">
            <fieldset class="input-box">
              <input id="input" type="text" required />
              <label for="input" placeholder="Username"></label>
            </fieldset>
            <fieldset class="input-box">
              <input id="email" type="email" required />
              <label for="email" placeholder="Email"></label>
            </fieldset>
            <fieldset class="input-box">
              <input
                id="password"
                type="password"
                autocomplete="off"
                required
              />
              <label for="password" placeholder="Password"></label>
            </fieldset>
            <button class="button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginView",
  data() {
    return {
      login: true,
    };
  },
};
</script>
<style lang="scss" scoped>
@media (min-width: 0px) {
  .login {
    font-family: "Fira Mono", monospace;
    font-family: "Roboto", sans-serif;

    width: 100%;
    height: 100vh;
    margin: 0px;
    padding: 0px;
    background-color: $color-background-login;

    .container__login {
      width: 100%;
      background-color: white;
      height: 100%;
      display: flex;
      flex-direction: column;
      .image__login {
        height: 30%;

        img {
          height: 100%;
        }
      }

      .content__login {
        .tittle__login {
          text-align: center;
          font-size: 2rem;
        }
        .type__login {
          display: flex;
          justify-content: center;
          gap: 40px;
          font-size: 1.5rem;
          margin-bottom: 50px;

          span {
            display: flex;
            flex-direction: column;
            gap: 5px;
            cursor: pointer;
            .bar {
              width: 60px;
              height: 10px;
              background-color: #0091da;
            }
          }
        }
        .signup__login {
          width: 100%;
          display: flex;
          justify-content: center;
          .login__content,
          .signup__content {
            width: 90%;
            .button {
              width: 100%;
              max-width: none;
            }
            .input-box {
              border: 0;
              padding: 0;
              margin: 0;
              min-width: 0;

              input {
                box-sizing: border-box;
                width: 100%;
                height: calc(3em + 2px);
                margin: 0 0 1em;
                padding: 6px;
                border: 1px solid #bababa;
                border-radius: 3px;
                background: #fff;
                font-size: 16px;
                resize: none;
                outline: none;

                &:focus {
                  border-color: #00bafa;
                }
                &:focus + label[placeholder]:before {
                  color: #0091da;
                }
                &:focus + label[placeholder]:before,
                &:valid + label[placeholder]:before {
                  transition-duration: 0.2s;
                  transform: translate(0, -1.6em) scale(0.9, 0.9);
                  font-weight: bold;
                }
                & + label[placeholder] {
                  display: block;
                  pointer-events: none;
                  line-height: 1.25em;
                  margin-top: calc(-3em - 2px);
                  margin-bottom: calc((3em - 1em) + 2px);
                }
                & + label[placeholder]:before {
                  content: attr(placeholder);
                  display: inline-block;
                  margin: 0 calc(0.5em + 2px);
                  padding: 0 2px;
                  color: #7d7d7d;
                  white-space: nowrap;
                  transition: 0.3s ease-in-out;
                  background-image: linear-gradient(
                    to bottom,
                    #ffffff,
                    #ffffff
                  );
                  background-size: 100% 5px;
                  background-repeat: no-repeat;
                  background-position: center;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media (min-width: 800px) {
  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .container__login {
      width: 70%;
      height: 80%;
      align-self: center;
      flex-direction: row;
      box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
        rgba(17, 17, 26, 0.05) 0px 8px 32px;
      .image__login {
        width: 50%;
        height: 100%;
        img {
          width: 100%;
        }
      }
      .content__login {
        width: 50%;
      }
    }
  }
}
</style>
