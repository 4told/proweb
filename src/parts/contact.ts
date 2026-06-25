import contact from './../assets/images/contact.png'
import contact1 from './../assets/images/contact1.png'
export function renderContact() {
    return `
<section class="contact py-5">
  <div class="container">

    <div class="text-center mb-5">
      <h1 class="fade-up" data-i18="contact.title"></h1>
      <p class="fade-up" data-i18="contact.subtitle"></p>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-6">

        <form class="fade-up">

          <div class="mb-3">
            <input type="text" class="form-control" data-i18-placeholder="contact.name" />
          </div>

          <div class="mb-3">
            <input type="email" class="form-control" data-i18-placeholder="contact.email" />
          </div>

          <div class="mb-3">
            <textarea class="form-control" rows="5" data-i18-placeholder="contact.message"></textarea>
          </div>

          <button class="btn btn-primary w-100" data-i18="contact.send"></button>

        </form>

      </div>
    </div>

  </div>
</section>

<img class="card-img-top" src="${contact1}" alt="project" />
<img class="card-img-top" src="${contact}" alt="project" />
    `
}