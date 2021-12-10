<template>
   <div class="page_container">
      <div class="contact_page_content">
        <div class="page_content">
          <div class="page_header">
            <h5 class="page_title">Get In Touch</h5>
          </div>
          <div class="page_desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus doloribus provident quibusdam nemo cum at. Possimus odio.
            </p>
          </div>
          <div class="contact_form">
            <h6 class="contact_form_header">Contact Form</h6>
            <div class="contact_form_content">
              <div class="contact_form_content_upper">
                <div class="contact_name contact_content">
                  <label for="name" class="contact_label">Name</label>
                  <input id="name" type="text" class="contact_input" required>
                </div>
                <div class="contact_email contact_content">
                  <label for="email" class="contact_label">Email Address</label>
                  <input id="email" type="text" class="contact_input" required>
                </div>
              </div>
              <div class="contact_message contact_content">
                <label for="message" class="contact_label">Message</label>
                <textarea id="message" class="contact_textarea" cols="30" rows="5" required></textarea>
              </div>
              <Button label="Send" />
             </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import Button from '../components/Button.vue';

export default {
 components: {
   Button,
 }
}
</script>


<style scoped>
.contact_page_content {
  padding: 50px 0;
}
.page_content {
  width: 50%;
  margin: auto;
}
.page_title {
  text-transform: uppercase;
  font-weight: bold;
}
.page_desc {
  margin: 20px 0 40px;
  /* font-size: 0.9rem; */
}
.contact_form {
  background-color: #0e1a2b;
  padding: 30px;
}
.contact_form_header {
  margin-bottom: 20px;
}
.contact_content {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  flex: 1;
}
.contact_label {
  font-size: 0.8rem;
  margin-bottom: 5px;
}
.contact_input,
.contact_textarea {
  background: #182c47;
  border: none;
  outline: none;
}
.contact_input {
  color: #fff;
  padding: 5px 10px;
  height: 30px;
}
.contact_name {
  padding-right: 10px;
}
.contact_form_content_upper {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 992px) {
  .page-content {
    width: 70%;
  }
  .contact_form_content_upper {
    flex-direction: column;
  }
  .contact_name {
    padding-right: 'initial';
  }
}
@media (max-width: 576px) {
  .page-content {
    width: 80%;
  }
}
</style>