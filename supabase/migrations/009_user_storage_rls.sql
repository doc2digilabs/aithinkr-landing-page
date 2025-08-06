-- Create a policy to allow users to view their own files
CREATE POLICY "Allow individual user select access"
ON storage.objects FOR SELECT
USING ( auth.uid()::text = (storage.foldername(name))[1] );

-- Create a policy to allow users to upload files to their own folder
CREATE POLICY "Allow individual user insert access"
ON storage.objects FOR INSERT
WITH CHECK ( auth.uid()::text = (storage.foldername(name))[1] );

-- Create a policy to allow users to delete their own files
CREATE POLICY "Allow individual user delete access"
ON storage.objects FOR DELETE
USING ( auth.uid()::text = (storage.foldername(name))[1] );
