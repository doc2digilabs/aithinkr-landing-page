CREATE POLICY "Give users authenticated access to folder iex1fq_0" ON storage.objects FOR INSERT TO authenticated, anon, service_role WITH CHECK (bucket_id = 'aithinkr-upload' AND (storage.foldername(name))[1] = 'private' AND auth.role() = 'authenticated');

((bucket_id = 'aithinkr-upload'::text) AND ((storage.foldername(name))[1] = 'private'::text) AND (auth.role() = 'authenticated'::text))