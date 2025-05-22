<template >
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <form @submit="handleSubmit(onSubmit)" class="bg-white p-6 rounded-2xl w-full max-w-2xl shadow-md space-y-4">
      <h1 class="text-3xl font-bold text-center mb-4 text-gray-800">Contact</h1>

      <!-- First Name -->
      <div>
        <label class="block mb-1 font-semibold text-gray-700">First Name</label>
        <Field name="firstName" v-slot="{ field, errorMessage }">
          <input v-bind="field" placeholder="John" class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" />
          <span class="text-red-600 text-sm">{{ errorMessage }}</span>
        </Field>
      </div>

      <!-- Last Name -->
      <div>
        <label class="block mb-1 font-semibold text-gray-700">Last Name</label>
        <Field name="lastName" v-slot="{ field, errorMessage }">
          <input v-bind="field" placeholder="Doe" class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" />
          <span class="text-red-600 text-sm">{{ errorMessage }}</span>
        </Field>
      </div>

      <!-- Email -->
      <div>
        <label class="block mb-1 font-semibold text-gray-700">Email</label>
        <Field name="email" v-slot="{ field, errorMessage }">
          <input v-bind="field" type="email" placeholder="you@example.com" class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" />
          <span class="text-red-600 text-sm">{{ errorMessage }}</span>
        </Field>
      </div>

      <!-- Submit -->
      <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 font-semibold">
        Submit
      </button>
    </form>
  </div>
</template>

<script lang="js" setup>
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

// Zod schema
const schema = toTypedSchema(z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address')
}))

// useForm setup
const { handleSubmit } = useForm({
  validationSchema: schema
})

// Submit function
function onSubmit(values) {
  alert(`Form Submitted ✅\nName: ${values.firstName} ${values.lastName}\nEmail: ${values.email}`)
}
</script>

<style lang="css">

</style>
