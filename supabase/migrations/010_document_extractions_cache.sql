
CREATE TABLE document_extractions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) NOT NULL,
    document_reference TEXT NOT NULL,
    extracted_text TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    UNIQUE (user_id, document_reference)
);

-- Enable RLS
ALTER TABLE document_extractions ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can insert their own extractions"
ON document_extractions FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own extractions"
ON document_extractions FOR SELECT TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own extractions"
ON document_extractions FOR UPDATE TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own extractions"
ON document_extractions FOR DELETE TO authenticated
USING (auth.uid() = user_id);
