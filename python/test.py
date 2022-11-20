import json
import requests

API_TOKEN = "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"

def query(payload='',parameters=None,options={'use_cache': False}):
      API_URL = "https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-2.7B"
      headers = {"Authorization": f"Bearer {API_TOKEN}"}
      body = {"inputs":payload,'parameters':parameters,'options':options}
      response = requests.request("POST", API_URL, headers=headers, data= json.dumps(body))
      try:
            response.raise_for_status()
      except requests.exceptions.HTTPError:
            return "Error:"+" ".join(response.json()['error'])
      else:
            return response.json()[0]['generated_text']

parameters = {
    'max_new_tokens':25,  # number of generated tokens
    'temperature': 0.5,   # controlling the randomness of generations
    'end_sequence': "###" # stopping sequence for generation
}

prompt="""
Tweet: "I hate it when my phone battery dies."
Sentiment: Negative
###
Tweet: 'My day has been 👍'
Sentiment: Positive
###
Tweet: 'This is the link to the article'
Sentiment: Neutral
###
Tweet: 'This new music video was incredibile'
Sentiment:
"""

data = query(prompt,parameters)
print(data)