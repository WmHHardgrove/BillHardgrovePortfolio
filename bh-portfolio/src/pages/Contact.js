import React from 'react'

function Contact() {
  return (
    <div>
        <div class="container">
  <h1>Contact</h1>
  <form target="_blank"  method="POST">
    <div class="form-group">
      <div class="form-row">
        <div class="col">
          <input type="text" name="name" class="form-control" placeholder="Name" required />
        </div>
        <div class="col">
          <input type="email" name="email" class="form-control" placeholder="Email Address" required />
        </div>
      </div>
    </div>
    <div class="form-group">
      <textarea placeholder="Tell me what is on your mind" class="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
  </form>
</div>
    </div>
  )
}

export default Contact