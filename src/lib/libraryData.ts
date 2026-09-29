import { createServerFn } from '@tanstack/react-start';
import { requireSupabaseAuth } from '@/integrations/supabase/auth-middleware';
export const getMyLibrary = createServerFn({method:'GET'}).middleware([requireSupabaseAuth]).handler(async({context})=>{
 const {data:entitlements,error}=await context.supabase.from('entitlements').select('product_id').eq('user_id',context.userId).eq('active',true);
 if(error)throw error;
 const ids=(entitlements??[]).map(e=>e.product_id);
 if(ids.length===0)return [];
 const {data:products,error:productError}=await context.supabase.from('products').select('id,title,description,cover_path,price_cents').in('id',ids);
 if(productError)throw productError;
 return products??[];
});
