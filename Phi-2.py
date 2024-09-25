from transformers import pipeline, PhiForCausalLM, AutoTokenizer

# Load the fine-tuned model and tokenizer
model = PhiForCausalLM.from_pretrained("phi-2-sxd/")
tokenizer = AutoTokenizer.from_pretrained("microsoft/phi-2", trust_remote_code=True)
tokenizer.pad_token = tokenizer.eos_token
tokenizer.padding_side = "right"

# Create the text generation pipeline
pipe = pipeline(task="text-generation", model=model, tokenizer=tokenizer, max_length=300)


# Generate text based on the provided prompt
prompt = "I have been experiencing joint pain in my fingers, wrists, and knees. The pain is often achy and throbbing, and it gets worse when I move my joints"
result = pipe(f"[abodx]: {prompt}")
print(result[0]['generated_text'])