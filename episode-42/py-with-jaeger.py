from jaeger_client import Config
from opentracing_instrumentation.local_span import LocalSpanManager
 
def init_tracer(service_name):
    config = Config(
        config={
            'sampler': {
                'type': 'const',
                'param': 1,
            },
            'logging': True,
        },
        service_name=service_name,
    )
    return config.initialize_tracer()
 
tracer = init_tracer('my-service')
 
with tracer.start_active_span('my-operation') as scope:
    # Do work
    pass