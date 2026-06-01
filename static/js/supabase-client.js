const SUPABASE_URL = 'https://pbwzpcgjrmvbhpztvcwh.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_blSRkABHYhif93qa7JYfwg_qPVeIJhs'
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

supabaseClient
  .from('customers')
  .select('id')
  .limit(1)
  .then(({ data, error }) => {
    if (error) console.error('Supabase error:', error.message)
    else console.log('Supabase connected:', data)
  })