"""
Query API Routes — SatQuery AI

Routes:
  POST /query/analyze   — Full agentic pipeline, returns QueryResponse
  POST /query/compile   — Only EarthQuerySpec (inspect query understanding)
"""
from fastapi import APIRouter, HTTPException
from backend.schemas.response import QueryRequest, QueryResponse, EarthQuerySpec
from backend.orchestrator import run_pipeline
from backend.services.earthquery.compiler import compile_query

router = APIRouter()


@router.post("/analyze", response_model=QueryResponse)
async def analyze_query(request: QueryRequest) -> QueryResponse:
    """
    Run the full SatQuery AI agentic pipeline.
    Returns all 8 components required by SIH26167:
      earthquery_spec, sensor_selection, agent_outputs,
      verifier_result, confidence_breakdown, execution_trace, answer, report_url.
    """
    try:
        return run_pipeline(request)
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))


@router.post("/compile", response_model=EarthQuerySpec)
async def compile_only(request: QueryRequest) -> EarthQuerySpec:
    """
    Return only the EarthQuerySpec — shows how the system understands the question
    without running the full pipeline. Used by the 'How I understood your question' panel.
    """
    return compile_query(request.question)
