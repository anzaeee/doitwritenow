<script>
  let status = "";
  const handleSubmit = async (data) => {
    status = "Submitting...";
    const formData = new FormData(data.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      status = result.message || "Success";
    }
  };
</script>

<div class="flex flex-col justify-center items-center gap-10 mt-10">
  <div class="text-4xl md:text-6xl text-primary font-bold fade-in">
    Contact Us
  </div>
  <div
    class="text-xl md:text-2xl space-y-4 font-medium text-neutral-750 fade-in"
  >
    Send us a message and we'll get back to you as soon as possible.
  </div>
</div>

<form
  class="max-w-md mx-auto p-6 bg-white rounded-md shadow-md h-full m-8 w-full"
  on:submit|preventDefault={handleSubmit}
>
  <input
    type="hidden"
    name="access_key"
    value="a44e48a9-fba9-48bc-b6ac-a51cd6a483f1"
  />

  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="name"
      >Name:</label
    >
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="name"
      type="text"
      name="name"
      placeholder="Enter your name"
      required
    />
  </div>

  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
      >Email:</label
    >
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="email"
      type="email"
      name="email"
      placeholder="Enter your email"
      required
    />
  </div>

  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="message"
      >Message:</label
    >
    <textarea
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="message"
      name="message"
      placeholder="Enter your message"
      required
      rows="3"
    ></textarea>
  </div>

  <div class="flex items-center justify-between">
    <button
      class="bg-gray-700 hover:bg-gray-900 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit">Submit</button
    >
  </div>
</form>

<div class="text-center mt-4">{status}</div>
